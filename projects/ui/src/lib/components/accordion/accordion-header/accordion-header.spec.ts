import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AccordionHeader } from "./accordion-header";

describe("AccordionHeader", () => {
    let component: AccordionHeader;
    let fixture: ComponentFixture<AccordionHeader>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AccordionHeader],
        }).compileComponents();

        fixture = TestBed.createComponent(AccordionHeader);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
