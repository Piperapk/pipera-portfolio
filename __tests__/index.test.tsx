import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom/jest-globals";

//Components to test
import Word_Card, { Props as WorkCardProps } from "../components/cards/Work_Card";
import AboutMe from "../components/AboutMe";
import Index, { Props as IndexProps } from '../pages/index'


const defaultWorkCardProps: WorkCardProps = {
    title: 'Card title',
    textBodyCase: 'Text Body',
    textBodyOutcome: 'Text Body Outcome',
    tagButtons: [
        { text: "Tag 1" }
    ],
    linkButtons: [
        {
          "text": "Code",
          "imgUrl": "https://ikrushkov.com",
          "imgPath": "/media/icon_github.svg"
        }
      ],
    image: '/media/work/adventureme.jpg',
    imageAlt: 'AdventureMe project screenshot'
};

const  defaultIndexProps: IndexProps = {
    openSourceWorks: [],
    works: []
}

describe('Work Cards', () => {
    it('Renders Work_Card component', () => {
        render(<Word_Card {...defaultWorkCardProps}/>);
        expect(screen.getByRole('heading', { name: 'Card title' })).toBeInTheDocument();
        expect(screen.getByRole('img', { name: 'AdventureMe project screenshot' })).toBeInTheDocument();
    })
})

describe('Dark/Light mode', () => {
    it('tests if theme transitions', () => {
        render(<AboutMe />)

        // screen.debug();

        const switches = screen.getAllByRole('img', {name: 'Dark, light mode switch'});
        fireEvent.click(switches[0]);

        // screen.debug();

    })
})

describe('Easter eggs', () => {
    it('shows easter egg on click', async () => {
        render(<Index {...defaultIndexProps}/>)

        // screen.debug();

        const switches = await screen.findAllByRole('img', {name: 'Dark, light mode switch'});
        fireEvent.click(switches[0]);

        await waitFor(() => {
            expect(screen.getByText("You've found 1 of 8 Easter Egg")).toBeInTheDocument();
        })

    })
})
