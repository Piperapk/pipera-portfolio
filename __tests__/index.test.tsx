import { render, screen, fireEvent, waitFor } from "@testing-library/react";

//Components to test
import Word_Card, { Props as WorkCardProps } from "../components/cards/Work_Card";
import AboutMe from "../components/AboutMe";
import Index, { Props as IndexProps } from '../pages/index'
import type { PortfolioWorks, OpenSourceWorks } from "../types/PortfolioData.Interface"


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
    image: '/media/work/adventureme.jpg'
};

const  defaultIndexProps: IndexProps = {
    openSourceWorks: [],
    works: []
}

describe('Work Cards', () => {
    it('Renders Work_Card component', () => {
        render(<Word_Card {...defaultWorkCardProps}/>);

        // screen.debug();
    })
})

describe('Dark/Light mode', () => {
    it('tests if theme transitions', () => {
        render(<AboutMe />)

        // screen.debug();

        const switches = screen.getAllByRole('img', {name: 'Dark, light mode switch'});
        fireEvent(switches[0], new MouseEvent ('click'));

        // screen.debug();

    })
})

describe('Easter eggs', () => {
    it('shows easter egg on click', async () => {
        render(<Index {...defaultIndexProps}/>)

        // screen.debug();

        const switches = await screen.findAllByRole('img', {name: 'Dark, light mode switch'});
        fireEvent(switches[0], new MouseEvent ('click'));

        waitFor(() => {
            expect(screen.findAllByRole('img', {name: 'Dark, light mode switch'})).toBeInTheDocument();
            // screen.debug(undefined, 300000);
        })

    })
})