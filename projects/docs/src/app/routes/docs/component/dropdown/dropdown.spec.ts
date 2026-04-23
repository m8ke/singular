import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ComponentDropdown } from "./dropdown";

describe("ComponentDropdown", () => {
    let component: ComponentDropdown;
    let fixture: ComponentFixture<ComponentDropdown>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ComponentDropdown],
        }).compileComponents();

        fixture = TestBed.createComponent(ComponentDropdown);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
