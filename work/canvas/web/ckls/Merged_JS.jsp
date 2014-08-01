<%--
  Created by IntelliJ IDEA.
  User: IBM
  Date: 2007-8-27
  Time: 14:59:22var EXTERNALUSER = "$SystemVariable$";
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.io.*" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.util.Calendar" %>
<%@ page import="java.util.Vector" %>
<%!
    public static String jsName = "ckls/ckls.js";
    public static String jsStr[] = {
            "js/common/jquery-2.0.3.min.js",
            "ckls/treeview/jquery.treeview.js",
            "ckls/tools.js",
            "ckls/BasicCanvas.js",
            "js/CacheHelper.js",
            //缓冲插件
            "js/loading-plugins/loadingPlugins.js",
            "ckls/DataDrive.js",
            "ckls/TreeTable.js",
            //窗口状态
            "ckls/winform.js",
            "ckls/publicFuc.js",
            "ckls/start.js",
            "js/windowMax.js"
    };
    public static void mFile(PrintWriter outc, File FileName) {
        try {
            InputStream fis = new FileInputStream(FileName);
            InputStreamReader isr = new InputStreamReader(fis,"UTF-8");
            BufferedReader br = new BufferedReader(isr);
            String a;
            boolean isComment = false;
            while ((a = br.readLine()) != null) {
                String strWatchComment = a.trim();
                if (strWatchComment.startsWith("//")) {

                } else
                if (strWatchComment.startsWith("/*") && strWatchComment.lastIndexOf("*/") != strWatchComment.length() - 2) {
                    isComment = true;
                } else
                if (strWatchComment.startsWith("/*") && strWatchComment.lastIndexOf("*/") == strWatchComment.length() - 2) {

                } else
                if (strWatchComment.lastIndexOf("*/") == strWatchComment.length() - 2 && strWatchComment.length() != 1) {
                    isComment = false;
                } else if (!isComment && !a.trim().equals("")) {
                    outc.println(a);
                }
            }
            br.close();
        } catch (IOException e) {
            System.out.println("-----------" + e.getMessage() + "------------");
            e.printStackTrace();
        }
    }
    public static void pushJS(boolean bCompiled, String producedPath, String uncompiledPath, String compiledPath) {
        try {
            System.out.println(producedPath + jsName);
            new File(producedPath + jsName).deleteOnExit();
            FileOutputStream fout = new FileOutputStream(producedPath + jsName);
            OutputStreamWriter osw = new OutputStreamWriter(fout,"UTF-8");
            String strJsPath = uncompiledPath;
            String strJSHeader = strJsPath;
            PrintWriter pw = new PrintWriter(osw);
            if (bCompiled) {
                strJsPath = compiledPath;
            }
            System.out.println(strJsPath);
            for (int i=0;i<jsStr.length;i++){
               String x =jsStr[i];
               mFile(pw, new File(strJsPath + x));
            }
            pw.close();
        }
        catch (IOException e) {
            System.out.println(11111);
            System.out.println(e);
        }
    }
%>
<%
    response.setHeader("Cache-Control", "no-store");
    response.setHeader("Pragrma", "no-cache");
    response.setDateHeader("Expires", 0);
    boolean bCompiled = Boolean.valueOf(request.getParameter("compiled")).booleanValue();
    System.out.println(request.getSession().getServletContext().getRealPath("/"));
    pushJS(
            //是否被混淆过变量，由参数传递
            bCompiled,
            //程序产生后版本的tomcat绝对路经
            //"D:\\work\\idea\\mapbar-api\\web\\test\\",
            //"D:\\tomcat-5.0.28-mapbar-api\\webapps\\webkit\\trunk\\src\\",
            request.getSession().getServletContext().getRealPath("/"),
            //程序产生所需要的源文件绝对路经
            //"D:/tomcat-5.0.28-mapbar-api/webapps/webkit/trunk/src/",
            request.getSession().getServletContext().getRealPath("/"),
            //request.getSession().getServletContext().getRealPath("/") + "branches\\1.0.x\\src\\",
            //"D:/work/env/tomcat-5.0.28-mapbar-api/webapps/newapi/",
            //程序加载混淆后各种零散文件所需要的路经
            "F:\\workspace\\baiduMap\\web\\"
            //"D:/work/env/JSCruncher/output/mapi/com/mapbar/maplet/"
    );
    response.setContentType("text/javascript");
    //String sPath = "D:\\tomcat-5.0.28-mapbar-api\\webapps\\webkit\\trunk\\src\\newapi.js";
    String sPath = request.getSession().getServletContext().getRealPath("/") + jsName;
    InputStream is = null;
    InputStreamReader isr = null;
    BufferedReader br = null;
    try {
        is = new FileInputStream(sPath);
        isr = new InputStreamReader(is,"UTF-8");
        br = new BufferedReader(isr);
        String line = "";
        while ((line = br.readLine()) != null) {
            out.println(line);
        }
    } catch (Exception e) {
        e.printStackTrace();
    } finally {
        if(br!=null){
            try
            {
                br.close();
            }catch(Exception ex){
            }
        }
    }
    //System.out.println("version = " + strVer + "[" + new Date().toLocaleString() + "] 是否为混淆变量版本 = " + bCompiled);
%>
