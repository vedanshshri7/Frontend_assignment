export const downloadJSON = (data) => {
    if (!data || !data.output || data.output.length === 0) {
      console.warn("No data to download.");
      return;
    }
  
    const jsonString = JSON.stringify(data.output, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const link = document.createElement("a");
  
    link.href = URL.createObjectURL(blob);
    link.download = "query_result.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  