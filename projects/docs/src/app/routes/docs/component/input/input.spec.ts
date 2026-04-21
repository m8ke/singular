import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ComponentInput } from "./input";

describe("TextField", () => {
    let component: ComponentInput;
    let fixture: ComponentFixture<ComponentInput>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ComponentInput],
        }).compileComponents();

        fixture = TestBed.createComponent(ComponentInput);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
