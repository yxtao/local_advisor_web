import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',  
    borderRadius: 15,
    padding:'10px 50px',
    margin: '30px 0',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));