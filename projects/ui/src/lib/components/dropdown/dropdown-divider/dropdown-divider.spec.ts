import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DropdownDivider } from "./dropdown-divider";

describe("DropdownDivider", () => {
    let component: DropdownDivider;
    let fixture: ComponentFixture<DropdownDivider>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DropdownDivider],
        }).compileComponents();

        fixture = TestBed.createComponent(DropdownDivider);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
