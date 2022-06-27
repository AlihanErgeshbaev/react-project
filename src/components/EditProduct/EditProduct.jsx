import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const EditProduct = () => {
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);
  const [image, setImage] = useState([]);

  function handleSave() {
    const newProduct = {
      title,
      description,
      price,
      image,
    };
    console.log(newProduct);
  }

  return (
    <Container maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"} marginTop={"30px"}>
        <Typography variant="h4">Edit product</Typography>
        <TextField
          label="Title"
          variant="filled"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          type="number"
          label="Price"
          variant="filled"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          label="Description"
          variant="filled"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          label="Image"
          variant="filled"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <Button onClick={handleSave} variant="contained" color="secondary">
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default EditProduct;
