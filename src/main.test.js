import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import GameApp from "../src/components/GameApp";

describe("GameApp component", () => {
    it("renders without crashing", () => {
        const { container } = render(
            React.createElement(GameApp, null)
        );
        expect(container).toBeDefined();
    });
});
