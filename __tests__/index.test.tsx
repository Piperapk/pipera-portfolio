import { render, screen } from "@testing-library/react";

//Components to test
import Word_Card, { Props as WorkCardProps } from "../components/cards/Work_Card"
import Work_Card_Small from "../components/cards/Work_Card_Small"

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

        screen.debug();
    })
})