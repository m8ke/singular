import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TooltipPlacement } from "./tooltip-placement";

describe("TooltipPlacement", () => {
    let component: TooltipPlacement;
    let fixture: ComponentFixture<TooltipPlacement>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TooltipPlacement],
        }).compileComponents();

        fixture = TestBed.createComponent(TooltipPlacement);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
