import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class SearchHeader extends React.Component {

  static propTypes = {
    search: PropTypes.func.isRequired,
  };

  /*An array containing all the country names in the world:*/
  categories = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball',
  'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook',
  'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas',
  'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games',
  'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
  'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy',
  'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling',
  'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy',
  'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']

  autocomplete(categories, clickCallBack) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    let currentFocus;
    const inp = document.getElementById('autoCompleteInput');
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener('input', function(e) {
      let a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement('DIV');
      a.setAttribute('id', this.id + 'autocomplete-list');
      a.setAttribute('class', 'autocomplete-items');
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < categories.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (categories[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement('DIV');
          /*make the matching letters bold:*/
          b.innerHTML = '<strong>' + categories[i].substr(0, val.length) + '</strong>';
          b.innerHTML += categories[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += `<input type='hidden' value=${categories[i]}>`;
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener('click', function(e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName('input')[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
            // triggers search events
            clickCallBack(inp.value);
          });
          a.appendChild(b);
        }
      }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener('keydown', (e) => {
      let x = document.getElementById(this.id + 'autocomplete-list');
      if (x) x = x.getElementsByTagName('div');
      if (e.keyCode === 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode === 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode === 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the 'active' item:*/
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      /*a function to classify an item as 'active':*/
      if (!x) return false;
      /*start by removing the 'active' class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class 'autocomplete-active':*/
      x[currentFocus].classList.add('autocomplete-active');
    }
    function removeActive(x) {
      /*a function to remove the 'active' class from all autocomplete items:*/
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove('autocomplete-active');
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      let x = document.getElementsByClassName('autocomplete-items');
      for (let i = 0; i < x.length; i++) {
        if (elmnt !== x[i] && elmnt !== inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener('click', function (e) {
      closeAllLists(e.target);
    });
  }

  componentDidMount() {
    this.autocomplete(this.categories, (category) => this.props.search(category));
  }

  render() {
    return (
      <div className='search-books-bar'>
          <Link className='back-search' to='/'>Back</Link>
          <form autoComplete='off'>
            <div className='autocomplete'>
              <input id='autoCompleteInput' type='text' name='myCountry' placeholder='Search books by category'/>
            </div>
          </form>
        </div>
    );
  }

}

export default SearchHeader;
