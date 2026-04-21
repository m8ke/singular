import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TableFooter } from "./table-footer";

describe("TableFooter", () => {
    let component: TableFooter;
    let fixture: ComponentFixture<TableFooter>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TableFooter],
        }).compileComponents();

        fixture = TestBed.createComponent(TableFooter);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
