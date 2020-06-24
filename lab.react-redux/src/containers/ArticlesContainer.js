import { connect } from "react-redux";
import Articles from "../components/Articles";
import { addArticle } from "../redux/actions";
  
const mapStateToProps = (gloablState) => ({
  usersP: gloablState.usersGlobal,
  articlesP: gloablState.articlesGlobal,
});

const mapDispachToProps = (dispach) => ({
  onAdd: (article) => dispach(addArticle(article)),
});

export default connect(mapStateToProps, mapDispachToProps)(Articles);



