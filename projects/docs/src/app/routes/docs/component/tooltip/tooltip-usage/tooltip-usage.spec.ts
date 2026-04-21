import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TooltipUsage } from "./tooltip-usage";

describe("TooltipPlacement", () => {
    let component: TooltipUsage;
    let fixture: ComponentFixture<TooltipUsage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TooltipUsage],
        }).compileComponents();

        fixture = TestBed.createComponent(TooltipUsage);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
