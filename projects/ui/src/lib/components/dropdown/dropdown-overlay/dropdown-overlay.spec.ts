import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DropdownOverlay } from "./dropdown-overlay";

describe("DropdownOverlay", () => {
    let component: DropdownOverlay;
    let fixture: ComponentFixture<DropdownOverlay>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DropdownOverlay],
        }).compileComponents();

        fixture = TestBed.createComponent(DropdownOverlay);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
