import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';
import axios from 'axios';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <View>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
          <Button
          title="Send Image"
          onPress={this._sendImage.bind(this)}
        />
          </View>
          }
      </View>
    );
  }

  _sendImage = async() => {
    /*const data = new FormData();
    data.append('name', 'avatar');
    data.append('fileData', {
      uri : this.state.image,
      type: 'image/jpg',
      name: 'image.jpg'
    });

    axios({
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: data,
      url: 'http://172.16.62.53:3000/' +'upload'
    });*/


    const formData = new FormData();
    formData.append("fileData", {
      uri: this.state.image,
      type: 'image/jpg',
      name: 'image.jpg'
    });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data; charset=utf-8;"
      }
    };

    axios.post('http://172.16.62.53:3000/upload', formData, config).then(
      response => {
        console.log({ response });
      },
      error => {
        console.log({ error });
      }
    );

  }
   

  

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}