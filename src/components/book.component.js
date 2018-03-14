import React, { Component } from 'react';
import '../assets/styles/book.css';
import '../App.css';

class Book extends Component {

    state = {
        book: {
            title: 'petit prince',
            subtitle: '',
            authors: ['Antine de saint-exupéry'],
            publisher: '',
            publishedDate: '',
            description: '',
            industryIdentifiers: [
                {
                    type: '',
                    identifier: ''
                }
            ],
            readingModes: {
                text: false,
                image: false
            },
            pageCount: 0,
            printType: '',
            categories: [],
            averageRating: 0,
            ratingsCount: 0,
            maturityRating: '',
            allowAnonLogging: false,
            contentVersion: '',
            panelizationSummary: {
                containsEpubBubbles: false,
                containsImageBubbles: false
            },
            imageLinks: {
                smallThumbnail: '',
                thumbnail: ''
            },
            language: '',
            previewLink: '',
            infoLink: '',
            canonicalVolumeLink: 'https://cdn-images-1.medium.com/max/1600/1*-UpPwWX2CVoQFRW23UMWtg.jpeg',
            id: '',
            shelf: ''
        }
    };

    render() {
        console.log('<>><<>>', this.props.shelf);
        return (
        <div>
            <div className="book">
                    <div className='book-cover-img' style={{
                        backgroundImage: `url(${this.state.book.canonicalVolumeLink})`
                    }}/>
            </div>
            <h1 className="book-title">{this.state.book.title}</h1>
            <h1 className="book-authors">{this.state.book.author}</h1>
        </div>
        );
     }
}

export default Book;
