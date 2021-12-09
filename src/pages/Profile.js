import {
  Avatar,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box } from '@mui/system';
import { avatar, postImg, postImgs, tokens } from '../dummyData';

export default function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderDetail = () => {
    switch (value) {
      case 0: // POSTS
        return (
          <ImageList variant="masonry" cols={3} gap={8}>
            {postImgs.map(({ img, title }) => (
              <ImageListItem key={img}>
                <img
                  src={`${img}?w=248&fit=crop&auto=format`}
                  alt={title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        );
      case 1: // CREATOR COIN
        return (
          <Grid container rowSpacing={3}>
            <Grid item md={0.5}></Grid>
            <Grid item md={11.5}>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                Holders of $cosmonaut coin
              </Typography>
            </Grid>
            <Grid item md={1} />
            <Grid item md={7}>
              <Typography style={{ color: 'GrayText' }}>
                User Name or PubKey
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography style={{ color: 'GrayText' }}>Coins Held</Typography>
            </Grid>
            <Grid item md={12}>
              <Divider variant="middle" />
            </Grid>

            <Grid item md={12}>
              {tokens.map(({ name, price, avatar }, index) => (
                <>
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar src={avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Grid container>
                          <Grid item md={8}>
                            <Typography>{name}</Typography>
                          </Grid>
                          <Grid item md={4}>
                            <Typography>~${price}</Typography>
                          </Grid>
                        </Grid>
                      }
                    />
                  </ListItem>
                </>
              ))}
            </Grid>
          </Grid>
        );
      case 2: // NFTS
        return (
          <Box
            style={{
              borderColor: '#d3d3d3',
              border: 'solid 1px',
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <Grid container>
              <Grid item md={1}>
                <Avatar src={avatar} />
              </Grid>
              <Grid item md={11}>
                <Grid container rowSpacing={1}>
                  <Grid item md={12} />
                  <Grid item md={12}>
                    <Typography style={{ fontWeight: 'bold' }}>
                      cosmonaut
                    </Typography>
                  </Grid>
                  <Grid item md={12}>
                    Hi, My new NFT~
                  </Grid>
                  <Grid item md={12}>
                    <Typography style={{ color: 'blue' }}>
                      #fire #100 #nft
                    </Typography>
                  </Grid>
                  <Grid item md={12}>
                    <img
                      src={postImg}
                      style={{ width: '100%', borderRadius: '20px' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        );
    }
  };

  return (
    <>
      <Grid container rowSpacing={4}>
        <Grid item md={5} align="center">
          <Avatar src={avatar} sx={{ width: 150, height: 150 }} />
        </Grid>
        <Grid item md={7}>
          <Grid container rowSpacing={2}>
            <Grid item md={12}>
              <Typography variant="h4">cosmonaut</Typography>
            </Grid>
            <Grid item md={12}>
              <Grid container rowSpacing={1}>
                <Grid item md={4}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    Coin Price
                  </Typography>
                </Grid>
                <Grid item md={8}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    ~$128.85
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography style={{ fontWeight: 'bold' }}>PubKey</Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography style={{ fontWeight: 'bold' }}>
                    BC1YLiFNARS...
                  </Typography>
                </Grid>
                <Grid item md={3}>
                  <ContentCopyIcon />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Grid container rowSpacing={1}>
                <Grid item md={4}>
                  <Typography>164 posts</Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography>742 follwers</Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography>76 following</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Typography>Hello~ I`m cosmonaut. </Typography>
              <Typography>Nice to meet you!</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Box>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Posts" />
              <Tab label="creator coin" />
              <Tab label="NFTs" />
            </Tabs>
          </Box>
        </Grid>
        <Grid item md={12}>
          {renderDetail()}
        </Grid>
      </Grid>
    </>
  );
}
