import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DrawerFooter } from "./drawer-footer";

describe("DrawerFooter", () => {
    let component: DrawerFooter;
    let fixture: ComponentFixture<DrawerFooter>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DrawerFooter],
        }).compileComponents();

        fixture = TestBed.createComponent(DrawerFooter);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
