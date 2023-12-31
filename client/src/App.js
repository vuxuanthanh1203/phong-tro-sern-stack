import { Routes, Route } from 'react-router-dom';

import { path } from './utils/constant';
import {
  Layout,
  HomePage,
  Login,
  PostDetail,
  CategoryPage
} from './containers/Public';

function App() {
  return (
    <div className="h-full w-full bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Layout />}>
          <Route path='*' element={<HomePage />} />
          <Route path={path.PAGINATION} element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<CategoryPage />} />
          <Route path={path.NHA_CHO_THUE} element={<CategoryPage />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<CategoryPage />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<CategoryPage />} />
          <Route path={path.POST_DETAIL__TITLE__POSTID} element={<PostDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
