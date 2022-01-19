import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InputBase from '@mui/material/InputBase';

import Header from '../Profile/Header';
import CloseButton from '../CloseButton';

import { disableColor } from '../../assets/colors';
import { maxContentLength } from '../../assets/values';
import { numberComma } from '../../utils';
import Scope from './Scope';

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1600px;
  max-height: 800px;
  width: 70%;
  height: 80%;
  background-color: black;
  border-radius: 10px;
`;
const ImageContainer = styled.img`
  width: 70%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;
const Content = styled.div`
  display: flex;
  flex-flow: column;
  width: 30%;
  height: 100%;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  // width: 100%;
  height: 80px;
  border-bottom: 1px solid ${disableColor};
  padding-left: 15px;
`;
const Tail = styled.div`
  flex: 1;
  padding-left: 15px;
  padding-top: 15px;
  font-family: 'Roboto';
`;

const textPlaceholder = 'Text field...';
const ModalCreate = ({ handleClose, img }) => {
    const [text, setText] = useState('');
    const hiddenFileInput = useRef(null);
    const [image, setImage] = useState(img);

    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    const onImgChange = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);

        // const files = event.target.files;
        // const fileArr = Array.prototype.slice.call(files);
        // const newImages = [];
        // for (const f of fileArr) {
        //     const reader = new FileReader();
        //     reader.onloadend = () => {
        //         const newImages = [...images];
        //         newImages.push(reader.result);
        //         setImages(newImages);
        //         // newImages.push(reader.result);
        //     };
        //     reader.readAsDataURL(f);
        // }
        // // setImages(newImages);
        // console.log(newImages.length);
    };

    const onChangeContent = (event) => {
        let newText = event.target.value;
        if (newText.length >= maxContentLength) {
            newText = newText.substring(0, maxContentLength);
        }
        setText(newText);
    };

    return (
        <Container>
            <ImageContainer src={image} onClick={handleClick} />
            <input
                ref={hiddenFileInput}
                style={{ display: 'none' }}
                type="file"
                accept="image/*"
                name="file"
                multiple
                onChange={onImgChange}
            />
            <Content>
                <Profile>
                    <Header />
                </Profile>
                <InputBase
                    fullWidth
                    fullHeight
                    value={text}
                    multiline
                    rows={7}
                    sx={{ padding: 1, borderBottom: `1px solid ${disableColor}` }}
                    label={textPlaceholder}
                    placeholder={textPlaceholder}
                    onChange={onChangeContent}
                    inputProps={{ 'aria-label': 'post' }}
                />
                <span style={{ marginLeft: 'auto', marginRight: 8, fontFamily: 'Roboto' }}>{numberComma(text.length)}/{numberComma(maxContentLength)}</span>
                <Tail>
                    <Scope />
                </Tail>
            </Content>
            <CloseButton onClose={handleClose} />
        </Container>
    );
};

ModalCreate.propTypes = {
    handleClose: PropTypes.func,
    img: PropTypes.any,
};
export default ModalCreate;
