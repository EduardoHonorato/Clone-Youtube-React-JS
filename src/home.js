import React from 'react';
import { makeStyles, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Box,
  Typography,
  ListSubheader,
  InputBase,
  alpha,
  Hidden,
  Switch
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import SearchIcon from '@material-ui/icons/Search';


const videos = [
  {
    id: 1,
    title:
      'Filmes e séries de 2022 | Jovem Nerd',
    channel: 'Jovem Nerd',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb1.jpg',
  },
  {
    id: 2,
    title:
      'Melhores filmes e séries de 2021 | Jovem Nerd',
      channel: 'Jovem Nerd',
      views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb2.jpg',
  },
  {
    id: 3,
    title:
      'UNO - A profecia é verdadeira | Jovem Nerd',
      channel: 'Jovem Nerd',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb3.jpg',
  },
  {
    id: 4,
    title:
      'Homem-Aranha: sem volta pra casa (trailer final oficial) ',
      channel: 'Jovem Nerd | Jovem Nerd',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb4.jpg',
  },
  {
    id: 5,
    title:
      'COMO VAI SER O DESIMPEDIDOS EM 2022?',
    channel: 'Desimpedidos',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb5.jpg',
  },
  {
    id: 6,
    title:
      'DEU BRIGA NO STOP DO FUTEBOL!',
      channel: 'Desimpedidos',
      views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb6.jpg',
  },
  {
    id: 7,
    title:
      'CONHECEMOS OS ESTÁDIOS DA COPA DO MUNDO DE 2022!',
      channel: 'Desimpedidos',
      views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb7.jpg',
  },
  {
    id: 8,
    title:
      'FRED +10 | Errou, cai na piscina - O RETORNO',
      channel: 'Desimpedidos',
      views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb8.jpg',
  },
  {
    id: 9,
    title:
      'CARIANI COMPROU O CARRO MAIS CARO DA LOJA',
      channel: 'Renato Cariani',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb9.jpg',
  },
  {
    id: 10,
    title:
      'PIMENTA MAIS FORTE DO MUNDO - DESAFIO DA MORTE !!!',
      channel: 'Renato Cariani',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb10.jpg',
  }
];


const useStyles = makeStyles((theme)=>({
  root:{
    height: '100%',
    backgroundColor: theme.palette.background.dark,
  },
  menuIcon:{
    paddingRight:theme.spacing(2),
    paddingLeft:theme.spacing(2)
  },
  icons:{
    paddingRight:theme.spacing(1)
  },
  appBar:{
    boxShadow:'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight:'none'
  },
  ListItemText:{
    fontSize:14,
  },
  grow:{
    flexGrow:1
  },
  logo:{
    height: 35,
  },
  listItem:{
    paddingTop:4,
    paddingBottom:4,
  },
  listItemIcon:{
    paddingTop:4,
    paddingBottom:4,
  },
  subheader:{
    textTransform:'uppercase',
    fontWeight:"600",
  },
  search: {
    marginLeft: 100,

    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    borderStyle: 'solid',
    width: '90%',
    marginLeft: 10,
    paddingRight:50,
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '74ch',
      '&:focus': {
        width: '75ch',
      },
    },
  },
}));

function Home({darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
  <div className={classes.root} >
    <AppBar className={classes.appBar} color="inherit">
      <Toolbar>
        <IconButton 
        edge="start" 
        className={classes.menuIcon} 
         aria-label="menu">
          <MenuIcon />
        </IconButton>
        <img src={theme.palette.type==='dark'? "/images/branco.png": "/images/preto.png"} alt="YouTube" className={classes.logo}/>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Pesquisa"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Pesquisa' }}
            />
          </div>
          <div className={classes.grow}/>
          <Switch value={darkMode} onChange={()=>setDarkMode(!darkMode)} className={classes.icons} />
          <IconButton 
        className={classes.icons} 
        >
          <VideoCallIcon />
        </IconButton>
        <IconButton 
        className={classes.icons} 
        >
          <AppsIcon />
        </IconButton>
        <IconButton 
        className={classes.icons} 
        >
          <MoreVertIcon />
        </IconButton>
        <Button 
        startIcon={<AccountCircleIcon/>}
        variant='outlined' 
        color="secondary">Fazer Login</Button>
      </Toolbar>
    </AppBar>
    <Box display="flex">
      <Hidden mdDown>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                  <ListItem button classes={{root:classes.listItem}}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={'Início'} classes={{
                      primary: classes.ListItemText
                    }} />
                  </ListItem>

                  <ListItem button classes={{root:classes.listItem}}>
                    <ListItemIcon><WhatshotIcon /></ListItemIcon>
                    <ListItemText primary={'Em alta'} classes={{
                      primary: classes.ListItemText
                    }} />
                  </ListItem>

                  <ListItem button classes={{root:classes.listItem}}>
                    <ListItemIcon><SubscriptionsIcon /></ListItemIcon>
                    <ListItemText primary={'Inscrições'} classes={{
                      primary: classes.ListItemText
                    }} />
                  </ListItem>

              </List>
              <Divider />
              <List>
              <ListItem button classes={{root:classes.listItem}}>
                    <ListItemIcon><VideoLibraryIcon /></ListItemIcon>
                    <ListItemText primary={'Biblioteca'} classes={{
                      primary: classes.ListItemText
                    }} />
                  </ListItem>

                  <ListItem button classes={{root:classes.listItem}}>
                    <ListItemIcon><HistoryIcon /></ListItemIcon>
                    <ListItemText primary={'Histórico'} classes={{
                      primary: classes.ListItemText
                    }} />
                  </ListItem>
              </List>
            <Divider/>

            <Box p={3}>
                <Typography variant='body2'> 
                  Faça login para curtir vídeos comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                <Button 
                  startIcon={<AccountCircleIcon/>}
                  variant='outlined' 
                  color="secondary">
                    Fazer Login
                  </Button>
                </Box>
            </Box>
            <Divider/>
              <List 
              subheader={
                <ListSubheader 
                component="div" 
                id="nested-list-subheader"
                className={classes.subheader}>
                  O Melhor do YouTube
                </ListSubheader>
              }>
                <ListItem button classes={{root:classes.listItem}}>
                  <ListItemIcon classes={{root:classes.listItemIcon}}><QueueMusicIcon /></ListItemIcon>
                  <ListItemText primary={'Música'} classes={{
                    primary: classes.ListItemText
                  }} />
                </ListItem>
                <ListItem button classes={{root:classes.listItem}}>
                  <ListItemIcon classes={{root:classes.listItemIcon}}><SportsBasketballIcon /></ListItemIcon>
                  <ListItemText primary={'Esportes'} classes={{
                    primary: classes.ListItemText
                  }} />
                </ListItem>
                <ListItem button classes={{root:classes.listItem}}>
                  <ListItemIcon classes={{root:classes.listItemIcon}}><SportsEsportsIcon /></ListItemIcon>
                  <ListItemText primary={'Jogos'} classes={{
                    primary: classes.ListItemText
                  }} />
                </ListItem>
                <ListItem button classes={{root:classes.listItem}}>
                  <ListItemIcon classes={{root:classes.listItemIcon}}><LocalMoviesIcon /></ListItemIcon>
                  <ListItemText primary={'Filmes'} classes={{
                    primary: classes.ListItemText
                  }} />
                </ListItem>
                <ListItem button classes={{root:classes.listItem}}>
                  <ListItemIcon classes={{root:classes.listItemIcon}}><FiberNewIcon /></ListItemIcon>
                  <ListItemText primary={'Notícias'} classes={{
                    primary: classes.ListItemText
                  }} />
                </ListItem>
                <ListItem button classes={{root:classes.listItem}}>
                  <ListItemIcon classes={{root:classes.listItemIcon}}><LiveTvIcon /></ListItemIcon>
                  <ListItemText primary={'Ao vivo'} classes={{
                    primary: classes.ListItemText
                  }} />
                </ListItem>
                <ListItem button classes={{root:classes.listItem}}>
                  <ListItemIcon classes={{root:classes.listItemIcon}}><YouTubeIcon /></ListItemIcon>
                  <ListItemText primary={'Destaques'} classes={{
                    primary: classes.ListItemText
                  }} />
                </ListItem>
                <ListItem button classes={{root:classes.listItem}}>
                  <ListItemIcon classes={{root:classes.listItemIcon}}><ThreeDRotationIcon /></ListItemIcon>
                  <ListItemText primary={'Vídeos 360'} classes={{
                    primary: classes.ListItemText
                  }} />
                </ListItem>
                <Divider/>
                <ListItem button classes={{root:classes.listItem}}>
                  <ListItemIcon classes={{root:classes.listItemIcon}}><AddCircleIcon /></ListItemIcon>
                  <ListItemText primary={'Procurar mais'} classes={{
                    primary: classes.ListItemText
                  }} />
                </ListItem>
                <Divider/>

              </List>
            </div>
        </Drawer>
      </Hidden>
    

      <Box p={3}>
        <Toolbar />
        <Typography
        variant='h5'
        color='textPrimary'
        style={{
          fontWeight:600,
          paddingBottom:20
        }}>
          Recomendados
        </Typography>

        <Grid container spacing={2}>
          {
            videos.map((item, index)=>(
              <Grid item lg={3} md={4} sm={6} xs={12}
              style={{
                cursor: 'pointer'
              }}>
                <Box>
                  <img 
                  style={{width:'100%'}}
                  alt={item.title}
                  src={item.thumb}/>
                  <Box>
                    <Typography
                    style={{fontWeight:600}}
                    gutterBottom
                    variant='body1'
                    color='textPrimary'>
                      {item.title}
                    </Typography>
                    <Typography
                    display='block'
                    variant='body2'
                    color='textSecondary'>
                      {item.channel}
                    </Typography>
                    <Typography
                    variant='body2'
                    color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))
          }
        </Grid>        
      </Box>
    </Box>
  </div>
  );
}

export default Home;