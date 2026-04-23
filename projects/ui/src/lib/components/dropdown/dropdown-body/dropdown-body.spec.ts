import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DropdownBody } from "./dropdown-body";

describe("DropdownBody", () => {
    let component: DropdownBody;
    let fixture: ComponentFixture<DropdownBody>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DropdownBody],
        }).compileComponents();

        fixture = TestBed.createComponent(DropdownBody);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
