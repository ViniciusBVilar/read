import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/book.css';
import '../App.css';

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  // state = {
  //   book: {
  //     title: 'petit prince',
  //     subtitle: '',
  //     authors: ['Antine de saint-exupéry'],
  //     publisher: '',
  //     publishedDate: '',
  //     description: '',
  //     industryIdentifiers: [
  //       {
  //         type: '',
  //         identifier: ''
  //       }
  //     ],
  //     readingModes: {
  //       text: false,
  //       image: false
  //     },
  //     pageCount: 0,
  //     printType: '',
  //     categories: [],
  //     averageRating: 0,
  //     ratingsCount: 0,
  //     maturityRating: '',
  //     allowAnonLogging: false,
  //     contentVersion: '',
  //     panelizationSummary: {
  //       containsEpubBubbles: false,
  //       containsImageBubbles: false
  //     },
  //     imageLinks: {
  //       smallThumbnail: '',
  //       thumbnail: ''
  //     },
  //     language: '',
  //     previewLink: '',
  //     infoLink: '',
  //     canonicalVolumeLink: 'https://cdn-images-1.medium.com/max/1600/1*-UpPwWX2CVoQFRW23UMWtg.jpeg',
  //     id: '',
  //     shelf: ''
  //   }
  // }

  render() {
    console.log('<>><<>>', this.props.book);
    return (
      <div>
        <div className="book">
          <div className='book-cover-img' style={{
            backgroundImage: `url(${this.props.book.imageLinks ?
              this.props.book.imageLinks.smallThumbnail :
              '../assets/img/no-cover-placeholder.jpg'})`
          }}/>
        </div>
        <h1 className="book-title">{this.props.book.title}</h1>
        <h2 className="book-title">{this.props.book.subtitle}</h2>
        <div>
          {this.props.book.authors &&
            this.props.book.authors.map((author, index) => (
            <h1  key={index}
              className="book-authors">{author}</h1>
          ))}
        </div>
      </div>
    );
  }
}

export default Book;
