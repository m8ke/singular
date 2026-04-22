import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import {
    AfterViewInit,
    Component,
    computed,
    effect,
    ElementRef,
    forwardRef,
    input,
    signal,
    viewChildren,
    ViewEncapsulation,
} from "@angular/core";

@Component({
    selector: "sg-input-otp",
    templateUrl: "./input-otp.html",
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputOtp),
            multi: true,
        },
    ],
    host: {
        "[class]": "'input-otp'",
    },
})
export class InputOtp implements AfterViewInit, ControlValueAccessor {
    public readonly digits = input.required<number>();
    public readonly autoFocus = input<boolean>(false);

    protected readonly inputs = viewChildren<ElementRef<HTMLInputElement>>("otpInput");
    protected readonly values = signal<string[]>([]);
    protected readonly disabled = signal<boolean>(false);

    private readonly value = computed(() => this.values().join(""));

    public constructor() {
        effect(() => {
            const length = this.digits();
            this.values.set(new Array(length).fill(""));
        });

        effect(() => {
            this.onChange(this.value());
        });
    }

    public ngAfterViewInit(): void {
        if (this.autoFocus()) {
            this.focus(0);
        }
    }

    public writeValue(value: string): void {
        const digits: string[] = value.replace(/\D/g, "").slice(0, this.digits()).split("");
        this.values.set(Array.from({ length: this.digits() }, (_, i) => digits[i] ?? ""));
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    protected onChange = (value: string): void => {};

    protected onTouched = (): void => {};

    protected onInput(event: any, index: number): void {
        const input = event.target as HTMLInputElement;

        const digit: string = input.value.replace(/\D/g, "").slice(-1);

        this.updateValue(index, digit);
        input.value = digit;

        this.onTouched();
        this.onChange(this.values().join(""));

        if (digit && index < this.digits() - 1) {
            this.getInput(index + 1)?.focus();
        }
    }

    protected onKeydown(event: KeyboardEvent, index: number): void {
        if (/^\d$/.test(event.key)) {
            event.preventDefault();

            this.setDigit(index, event.key);
            this.focus(index + 1);
            return;
        }

        if (event.key === "Backspace") {
            if (!this.values()[index] && index > 0) {
                this.focus(index - 1);
            }

            this.setDigit(index, "");
            return;
        }

        if (event.key === "ArrowLeft" && index > 0) {
            event.preventDefault();
            this.focus(index - 1);
            return;
        }

        if (event.key === "ArrowRight" && index < this.digits() - 1) {
            event.preventDefault();
            this.focus(index + 1);
            return;
        }
    }

    protected onPaste(event: ClipboardEvent): void {
        event.preventDefault();

        const digits: string[] = (event.clipboardData?.getData("text") ?? "").replace(/\D/g, "").slice(0, this.digits()).split("");

        this.values.set(Array.from({ length: this.digits() }, (_, i) => digits[i] ?? ""));

        this.focus(digits.length - 1);
    }

    private setDigit(index: number, digit: string): void {
        this.values.update((arr) => {
            const next = [...arr];
            next[index] = digit;
            return next;
        });

        this.onTouched();
    }

    private focus(index: number): void {
        this.inputs()?.at(index)?.nativeElement.focus();
    }

    private getInput(index: number): HTMLInputElement | null {
        return this.inputs()?.at(index)?.nativeElement as HTMLInputElement;
    }

    private updateValue(index: number, value: string): void {
        this.values.update((arr) => {
            const copy: string[] = [...arr];
            copy[index] = value;
            return copy;
        });
    }
}
