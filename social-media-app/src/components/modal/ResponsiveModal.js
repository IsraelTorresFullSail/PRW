import React from 'react'
import Modal from 'react-responsive-modal'
import './ResponsiveModal.css'
import MyBtn from '../buttons/MyBtn'
import MyForm from '../myForm/MyForm'
 
class ResponsiveModal extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button  onClick={this.onOpenModal} style={styles.myBtn}>Add Social Profile</button>
        <Modal open={open} onClose={this.onCloseModal} center>
            <h1 style={styles.h1}>Social Profile</h1>
            <MyForm />
        </Modal>
      </div>
    );
  }
}
 
export default ResponsiveModal

const styles = {
    myBtn: {
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingRight: '30px',
        paddingLeft: '30px',
        color: '#040B71',
        margin: '5px',
        fontSize: '1em',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '50px',
        border: '1px solid rgba(4,11,113,0.3)'
    },
    h1: {
        color: '#040B71',
        fontSize: '1.25em',
        fontWeight: '800',
        textAlign: 'center',
        marginTop: '30px',
    }
}