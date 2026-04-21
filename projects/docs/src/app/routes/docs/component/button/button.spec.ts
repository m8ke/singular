import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ComponentButton } from "./button";

describe("Button", () => {
    let component: ComponentButton;
    let fixture: ComponentFixture<ComponentButton>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ComponentButton],
        }).compileComponents();

        fixture = TestBed.createComponent(ComponentButton);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
