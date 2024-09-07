import { Box, Paper } from "@mui/material";

function CenteredPaper({ children, paperSize = '100rem' }) {
    return (
        <div className="h-100 px-3 py-1">
            <Box className="h-100 d-flex justify-content-center align-items-center w-100">
                <Paper elevation={1} className="px-2 rounded" sx={{ maxWidth: paperSize, width: '100%', maxHeight: paperSize }}>
                    {children}
                </Paper>
            </Box>
        </div>
    );
}

export default CenteredPaper;
