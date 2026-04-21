import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogUsage } from "./dialog-usage";

describe("TooltipUsage", () => {
    let component: DialogUsage;
    let fixture: ComponentFixture<DialogUsage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DialogUsage],
        }).compileComponents();

        fixture = TestBed.createComponent(DialogUsage);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
