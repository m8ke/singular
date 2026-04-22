import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AccordionBody } from "./accordion-body";

describe("AccordionBody", () => {
    let component: AccordionBody;
    let fixture: ComponentFixture<AccordionBody>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AccordionBody],
        }).compileComponents();

        fixture = TestBed.createComponent(AccordionBody);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
