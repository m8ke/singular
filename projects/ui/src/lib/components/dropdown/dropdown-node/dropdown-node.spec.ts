import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DropdownNodeDirective } from "./dropdown-node";

describe("DropdownNode", () => {
    let component: DropdownNodeDirective;
    let fixture: ComponentFixture<DropdownNodeDirective>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DropdownNodeDirective],
        }).compileComponents();

        fixture = TestBed.createComponent(DropdownNodeDirective);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
