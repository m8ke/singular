import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DrawerBody } from "./drawer-body";

describe("DrawerBody", () => {
    let component: DrawerBody;
    let fixture: ComponentFixture<DrawerBody>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DrawerBody],
        }).compileComponents();

        fixture = TestBed.createComponent(DrawerBody);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
