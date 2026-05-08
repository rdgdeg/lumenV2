import { Routes, Route } from "react-router-dom";
import { NoticeProvider } from "@/hooks/useNotices";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import AdminPage from "@/pages/AdminPage";
import CondolenceDetailPage from "@/pages/CondolenceDetailPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";

function App() {
  return (
    <NoticeProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/condoleances/:id" element={<CondolenceDetailPage />} />
        <Route path="/service/:serviceKey" element={<ServiceDetailPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </NoticeProvider>
  );
}

export default App;
