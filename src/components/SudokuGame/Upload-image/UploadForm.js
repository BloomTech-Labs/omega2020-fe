import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './UploadImage.css';
import { postImage } from './postImage';
import RenderPuzzle from '../puzzle-handler/RenderPuzzle';
import UploadSudoku2 from './UploadSudoku2';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  })
);

function ProgressIndicator(props) {
  const classes = useStyles();
  const isUploading = props.isUploading;
  return (
    <Backdrop className={classes.backdrop} open={isUploading}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
}

export default function UploadForm() {
  const [file, setFile] = useState({ preview: null, raw: null });
  const [solution, setSolution] = useState({
    puzzle_status: '',
    solution: '',
    values: '',
  });
  const [isUploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setFile({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    // show progress component
    setUploading(true);
    const fileBlob = new Blob([file.raw]);
    const formData = new FormData();

    formData.append('file', fileBlob, fileBlob.filename);
    const formConfig = { headers: { 'content-type': 'multipart/form-data' } };

    const asolution = await postImage(formData, formConfig);
    const puzzleStatus = asolution.puzzle_status;
    const original = asolution.values;
    const level = asolution.difficulty;
    const solved = asolution.solution;

    await setSolution(asolution);
    await setFile({});

    if (puzzleStatus === 1) {
      // valid with solution;
      const isPuzzle = true;
      setSolution(asolution);
      return asolution;
      // Else if no solution able to be derived
    } else if (puzzleStatus === 2) {
      alert('Puzzle is invalid. Please take another picture and try again.');
    }
    // hide progress component
    setUploading(false);
    console.log('RESPONSE', asolution);
  };

  return (
    <>
      {solution.puzzle_status === 1 ? (
        <UploadSudoku2 solution={solution} />
      ) : (
        <div align='center'>
          <ProgressIndicator isUploading={isUploading} />
          <div
            className='upload-image'
            align='center'
            style={{ marginTop: '5%' }}
          >
            <label htmlFor='upload-button'>
              {file.preview ? (
                <img
                  src={file.preview}
                  width='400'
                  height='400'
                  id='preview'
                  alt='Upload your image'
                />
              ) : (
                <></>
              )}
            </label>
            <input
              type='file'
              name='file'
              id='input-file'
              onChange={handleChange}
            />
            <Button
              variant='contained'
              color='primary'
              className='gameControlBtn'
              onClick={handleUpload}
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
