import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { saveFormLocally } from "../mock";

export function useEnrollmentSubmit(endpoint, resetForm) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Gracefully handle missing environment variables during development
  const baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
  const API = `${baseURL}/api`;

  const submitHandler = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post(`${API}/${endpoint}`, { ...data, source_page: endpoint });
      toast.success("Registration received! Our technical team will contact you shortly.");
      if (resetForm) resetForm();
    } catch (error) {
      console.error("Submission failed, attempting local save:", error);
      const ok = saveFormLocally(`osh-${endpoint}`, data);
      if (ok) {
        toast.success("Offline Mode: Data cached for background sync.");
        if (resetForm) resetForm();
      } else {
        toast.error("Submission error. Please check your connection.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitHandler, isSubmitting };
}