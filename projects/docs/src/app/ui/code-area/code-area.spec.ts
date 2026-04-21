import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CodeArea } from "./code-area";

describe("CodeArea", () => {
    let component: CodeArea;
    let fixture: ComponentFixture<CodeArea>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CodeArea],
        }).compileComponents();

        fixture = TestBed.createComponent(CodeArea);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
