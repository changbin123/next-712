
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
export default function Types() {
    return (
        <Box sx={{ width: '100%', margin: 2 }}>
            <Typography variant="h4" gutterBottom>
                预推送事件
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
            >
                <Grid
                    md={10}
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ borderRightWidth: 3, borderRightColor: 'rgba(0, 0, 0, 0.06)', borderRightStyle: 'solid' }}

                >
                    {/* <InputLabel htmlFor="my-input">任务名称</InputLabel> */}
                    <Grid item md={4}>
                        <FormControlLabel
                            label={
                                <div style={{ width: 90 }}>
                                    事件标签
                                </div>
                            }
                            labelPlacement="start"
                            control={<TextField sx={{ marginBottom: 1, '& div:before': { borderBottom: 'none' } }} label="请输入事件标签" size="small" id="fullWidth" variant="filled" />
                            }
                        />
                    </Grid>
                    <Grid item md={4}>
                        <FormControlLabel
                            label={
                                <div style={{ width: 90 }}>
                                    热点分类
                                </div>
                            }
                            labelPlacement="start"
                            control={<TextField sx={{ marginBottom: 1, '& div:before': { borderBottom: 'none' } }} id="outlined-basic" label="请输入热点分类" size="small" variant="filled" />
                            }
                        />
                    </Grid>
                    <Grid item md={4}>
                        <FormControlLabel
                            label={
                                <div style={{ width: 90 }}>
                                    具体分类
                                </div>
                            }
                            labelPlacement="start"
                            control={<TextField sx={{ marginBottom: 1, '& div:before': { borderBottom: 'none' } }} id="outlined-basic" label="全部" size="small" variant="filled" />
                            }
                        />
                    </Grid>
                    <Grid item md={4}>
                        <FormControlLabel
                            label={
                                <div style={{ width: 90 }}>
                                    筛选方式
                                </div>
                            }
                            labelPlacement="start"
                            control={<TextField sx={{ marginTop: 1, '& div:before': { borderBottom: 'none' } }} label="全部" size="small" id="fullWidth" variant="filled" />
                            }
                        />
                    </Grid>
                    <Grid item md={4}>
                        <FormControlLabel
                            label={
                                <div style={{ width: 90 }}>
                                    创建事件
                                </div>
                            }
                            labelPlacement="start"
                            control={<TextField sx={{ marginTop: 1, '& div:before': { borderBottom: 'none' } }} id="outlined-basic" label="全部" size="small" variant="filled" />
                            }
                        />
                    </Grid>
                    <Grid item md={4}>
                        <FormControlLabel
                            label={
                                <div style={{ width: 90 }}>
                                    状态
                                </div>
                            }
                            size="small"
                            labelPlacement="start"
                            sx={{ justifyContent: 'space-between' }}
                            control={<TextField sx={{ marginTop: 1, '& div:before': { borderBottom: 'none' } }} id="outlined-basic" label="全部" size="small" variant="filled" />
                            }
                        />
                    </Grid>

                </Grid>
                <Grid item md={2}
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems='center'
                >
                    <Button sx={{ width: 110, height: 50 }} size="large" startIcon={<SearchIcon />} variant="contained">查询</Button>
                    <Button sx={{ bgcolor: 'rgba(0,0,0,0.06)', color: 'black', width: 110, height: 50 }} size="large" startIcon={<RefreshIcon />} variant="contained" >重置</Button>
                </Grid>
            </Grid>

        </Box>
    );
}