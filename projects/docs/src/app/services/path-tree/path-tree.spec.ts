import { TestBed } from "@angular/core/testing";

import { PathTree } from "./path-tree";

describe("PathTree", () => {
    let service: PathTree;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PathTree);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
