import { AfterViewInit, Component, ElementRef, forwardRef, input, OnInit, signal, viewChildren, ViewEncapsulation } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

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
        "[class]": "'input-otp'"
    }
})
export class InputOtp implements OnInit, AfterViewInit, ControlValueAccessor {
    public readonly digits = input<number>(6);
    public readonly inputs = viewChildren<ElementRef<HTMLInputElement>>("otpInput");

    protected readonly values = signal<string[]>([]);
    protected readonly disabled = signal<boolean>(false);

    public ngOnInit(): void {
        this.values.set(new Array(this.digits()).fill(""));
    }

    public ngAfterViewInit(): void {
        this.getInput(0)?.focus();
    }

    public writeValue(value: string): void {
        console.log(value);
        if (value) {
            this.values.set(value.split("").slice(0, this.digits()));
        } else {
            this.values.set(new Array(this.digits()).fill(""));
        }
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled.set(isDisabled);
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
        const input = event.target as HTMLInputElement;

        if (/^\d$/.test(event.key)) {
            event.preventDefault();

            this.updateValue(index, event.key);
            input.value = event.key;

            this.onTouched();
            this.onChange(this.values().join(""));

            if (index < this.digits() - 1) {
                this.getInput(index + 1)?.focus();
            }

            return;
        }

        if (event.key === "ArrowLeft" && index > 0) {
            event.preventDefault();
            this.getInput(index - 1)?.focus();
            return;
        }

        if (event.key === "ArrowRight" && index < this.digits() - 1) {
            event.preventDefault();
            this.getInput(index + 1)?.focus();
            return;
        }

        if (event.key === "Backspace" && !this.values().at(index) && index > 0) {
            this.getInput(index - 1)?.focus();
        }
    }

    protected onPaste(event: ClipboardEvent): void {
        event.preventDefault();

        const pasted: string = event.clipboardData?.getData("text") ?? "";

        const digits: string[] = pasted.replace(/\D/g, "").slice(0, this.digits()).split("");

        digits.forEach((digit, index) => {
            this.updateValue(index, digit);
            const input = this.getInput(index);

            if (input) {
                input.value = digit;
            }
        });

        this.onChange(this.values().join(""));

        const focusIndex: number = Math.min(digits.length, this.digits() - 1);
        this.getInput(focusIndex)?.focus();
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
