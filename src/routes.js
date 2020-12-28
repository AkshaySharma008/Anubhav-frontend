import Article from "./pages/Article";
import CompanyWiseArticleList from "./pages/CompanyWiseArticleList";
import HomePage from "./pages/HomePage";
import RequestArticle from "./pages/RequestArticle";
import SubmitArticle from "./pages/SubmitArticle";

export const mainRoute = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/interview/:companyName",
        exact: true,
        component: CompanyWiseArticleList
    },
    {
        path: "/article/:articleId",
        exact: true,
        component: Article
    },
    {
        path: "/submit",
        exact: true,
        component: SubmitArticle
    },
    {
        path: "/request",
        exact: true,
        component: RequestArticle
    },

]

