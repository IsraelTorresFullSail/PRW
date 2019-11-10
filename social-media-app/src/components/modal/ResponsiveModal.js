import React from 'react'
import Modal from 'react-responsive-modal'
import './ResponsiveModal.css'
import MyForm from '../myForm/MyForm'
import MyBtn from '../buttons/MyBtn'
import { FaUserCog } from 'react-icons/fa'
 
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
        <MyBtn btnText="Profile" icon={<FaUserCog style={styles.faUserCog} />} onClick={this.onOpenModal} />
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
    h1: {
        color: '#040B71',
        fontSize: '1.25em',
        fontWeight: '800',
        textAlign: 'center',
        marginTop: '30px',
    },
    faUserCog: {
      position: 'absolute',
      top: '10px',
      right: '15px',
      width: '1.2em',
      height: '1.2em'
  }
}