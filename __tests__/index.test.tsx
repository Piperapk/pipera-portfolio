import { render, screen, fireEvent } from "@testing-library/react";
import AboutMe from "../components/AboutMe";

//Components to test
import Word_Card, { Props as WorkCardProps } from "../components/cards/Work_Card"

const defaultProps: WorkCardProps = {
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

describe('Work Cards', () => {
    it('Renders Work_Card component', () => {
        render(<Word_Card {...defaultProps}/>);

        //screen.debug();
    })
})

describe('Dark/Light mode', () => {
    it('tests if theme transitions', () => {
        render(<AboutMe />)

        screen.debug();

        const switches = screen.getAllByRole('img', {name: 'Dark, light mode switch'});
        fireEvent(switches[0], new MouseEvent ('click'));

        screen.debug();

    })
})