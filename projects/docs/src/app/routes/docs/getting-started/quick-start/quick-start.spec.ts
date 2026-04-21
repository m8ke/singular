import { ComponentFixture, TestBed } from "@angular/core/testing";

import { QuickStart } from "./quick-start";

describe("QuickStart", () => {
    let component: QuickStart;
    let fixture: ComponentFixture<QuickStart>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [QuickStart],
        }).compileComponents();

        fixture = TestBed.createComponent(QuickStart);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
