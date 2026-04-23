import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DropdownUsage } from "./dropdown-usage";

describe("DropdownUsage", () => {
    let component: DropdownUsage;
    let fixture: ComponentFixture<DropdownUsage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DropdownUsage],
        }).compileComponents();

        fixture = TestBed.createComponent(DropdownUsage);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
