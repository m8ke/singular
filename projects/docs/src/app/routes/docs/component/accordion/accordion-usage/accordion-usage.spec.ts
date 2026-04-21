import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AccordionUsage } from "./accordion-usage";

describe("AccordionUsage", () => {
    let component: AccordionUsage;
    let fixture: ComponentFixture<AccordionUsage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AccordionUsage],
        }).compileComponents();

        fixture = TestBed.createComponent(AccordionUsage);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
