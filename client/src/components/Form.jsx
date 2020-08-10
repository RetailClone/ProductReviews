import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <form>
      <div>
        <div>
          <input name='title' placeholder='Review title (optional)'></input>
        </div>
        <div>
          <input name='name' placeholder='Display name'></input>
        </div>
        <div>
          <textarea rows='5' cols='50' placeholder='Review' name='review'></textarea>
        </div>
        <div>
          <span>
            <button>Cancel</button>
          </span>
          <button>Submit review</button>
        </div>
      </div>
      </form>
    )
  }
}

export default Form;