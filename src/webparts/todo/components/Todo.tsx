import * as React from 'react';
import './style.css';
import type { ITodoProps } from './ITodoProps';

const images = [
  "https://www.w3schools.com/howto/img_nature_wide.jpg",
  "https://images.freeimages.com/variants/k1wQB7egQotJ7Hr3ZBPP1S5c/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d?fmt=webp&h=350",
  "https://images.freeimages.com/images/large-previews/8b0/lake-1332261.jpg?fmt=webp&h=350"
];

export default class Todo extends React.Component<ITodoProps, { current: number }> {
  constructor(props: ITodoProps) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  nextSlide = (): void => {
    this.setState((prevState) => ({
      current: prevState.current === images.length - 1 ? 0 : prevState.current + 1,
    }));
  };

  prevSlide = (): void => {
    this.setState((prevState) => ({
      current: prevState.current === 0 ? images.length - 1 : prevState.current - 1,
    }));
  };

  render(): React.ReactElement<ITodoProps> {
    const { current } = this.state;

    return (
      <div>
        <h2>Project1: image slider</h2>
        <div className="slider">
          <div className="left-arrow" onClick={this.prevSlide}>
            left
          </div>
          <div className="right-arrow" onClick={this.nextSlide}>
            right
          </div>
          {images.map(
            (image, index) =>
              current === index && (
                <div key={image} className='slide'>
                  <img src={image} alt="images" />
                </div>
              )
          )}
        </div>
      </div>
    );
  }
}
