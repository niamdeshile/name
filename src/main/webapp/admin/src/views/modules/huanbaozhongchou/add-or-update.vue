<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row>
                        <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="社团编号" prop="shetuanbianhao">
          <el-input v-model="ruleForm.shetuanbianhao" 
              placeholder="社团编号" clearable  :readonly="ro.shetuanbianhao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="社团编号" prop="shetuanbianhao">
              <el-input v-model="ruleForm.shetuanbianhao" 
                placeholder="社团编号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="社团名称" prop="shetuanmingcheng">
          <el-input v-model="ruleForm.shetuanmingcheng" 
              placeholder="社团名称" clearable  :readonly="ro.shetuanmingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="社团名称" prop="shetuanmingcheng">
              <el-input v-model="ruleForm.shetuanmingcheng" 
                placeholder="社团名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="环保类型" prop="huanbaoleixing">
          <el-select v-model="ruleForm.huanbaoleixing" placeholder="请选择环保类型">
            <el-option
                v-for="(item,index) in huanbaoleixingOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="环保类型" prop="huanbaoleixing">
	      <el-input v-model="ruleForm.huanbaoleixing"
                placeholder="环保类型" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'" label="项目编号" prop="xiangmubianhao">
            <el-input v-model="ruleForm.xiangmubianhao" 
                placeholder="项目编号" readonly></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.xiangmubianhao" label="项目编号" prop="xiangmubianhao">
              <el-input v-model="ruleForm.xiangmubianhao" 
                placeholder="项目编号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="项目名称" prop="xiangmumingcheng">
          <el-input v-model="ruleForm.xiangmumingcheng" 
              placeholder="项目名称" clearable  :readonly="ro.xiangmumingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="项目名称" prop="xiangmumingcheng">
              <el-input v-model="ruleForm.xiangmumingcheng" 
                placeholder="项目名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="24">  
        <el-form-item class="upload" v-if="type!='info' && !ro.tupian" label="图片" prop="tupian">
          <file-upload
          tip="点击上传图片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.tupian?ruleForm.tupian:''"
          @change="tupianUploadChange"
          ></file-upload>
        </el-form-item>
        <div v-else>
          <el-form-item v-if="ruleForm.tupian" label="图片" prop="tupian">
            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.tupian.split(',')" :src="item" width="100" height="100">
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="众筹金额" prop="zhongchoujine">
          <el-input v-model="ruleForm.zhongchoujine" 
              placeholder="众筹金额" clearable  :readonly="ro.zhongchoujine"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="众筹金额" prop="zhongchoujine">
              <el-input v-model="ruleForm.zhongchoujine" 
                placeholder="众筹金额" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="发起时间" prop="faqishijian">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.faqishijian" 
                type="date"
                placeholder="发起时间">
            </el-date-picker> 
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.faqishijian" label="发起时间" prop="faqishijian">
              <el-input v-model="ruleForm.faqishijian" 
                placeholder="发起时间" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="截止时间" prop="jiezhishijian">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.jiezhishijian" 
                type="date"
                placeholder="截止时间">
            </el-date-picker> 
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.jiezhishijian" label="截止时间" prop="jiezhishijian">
              <el-input v-model="ruleForm.jiezhishijian" 
                placeholder="截止时间" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                                                                                                                                                                                                  </el-row>
                                                                                                                                                                                                                                                                                                                                                                              <el-row>
            <el-col :span="24">
              <el-form-item v-if="type!='info'"  label="项目介绍" prop="xiangmujieshao">
                <editor 
                    style="min-width: 200px; max-width: 600px;"
                    v-model="ruleForm.xiangmujieshao" 
                    class="editor" 
                    action="file/upload">
                </editor>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.xiangmujieshao" label="项目介绍" prop="xiangmujieshao">
                    <span v-html="ruleForm.xiangmujieshao"></span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
                                <el-row>
            <el-col :span="24">
              <el-form-item v-if="type!='info'"  label="项目进展" prop="xiangmujinzhan">
                <editor 
                    style="min-width: 200px; max-width: 600px;"
                    v-model="ruleForm.xiangmujinzhan" 
                    class="editor" 
                    action="file/upload">
                </editor>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.xiangmujinzhan" label="项目进展" prop="xiangmujinzhan">
                    <span v-html="ruleForm.xiangmujinzhan"></span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
                                                                            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    
    
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"btnSaveFontColor":"#fff","selectFontSize":"14px","btnCancelBorderColor":"rgba(255, 255, 102, 1)","inputBorderRadius":"4px","inputFontSize":"14px","textareaBgColor":"rgba(255, 255, 255, 0.25)","btnSaveFontSize":"14px","textareaBorderRadius":"4px","uploadBgColor":"#fff","textareaBorderStyle":"solid","btnCancelWidth":"88px","textareaHeight":"120px","dateBgColor":"#fff","btnSaveBorderRadius":"4px","uploadLableFontSize":"14px","textareaBorderWidth":"1px","inputLableColor":"rgba(25, 169, 123, 1)","addEditBoxColor":"rgba(25, 169, 123, 0.11)","dateIconFontSize":"14px","btnSaveBgColor":"rgba(25, 169, 123, 1)","uploadIconFontColor":"rgba(25, 169, 123, 1)","textareaBorderColor":"rgba(25, 169, 123, 1)","btnCancelBgColor":"rgba(255, 255, 102, 1)","selectLableColor":"rgba(25, 169, 123, 1)","btnSaveBorderStyle":"solid","dateBorderWidth":"1px","dateLableFontSize":"14px","dateBorderRadius":"4px","btnCancelBorderStyle":"solid","selectLableFontSize":"14px","selectBorderStyle":"solid","selectIconFontColor":"#C0C4CC","btnCancelHeight":"44px","inputHeight":"40px","btnCancelFontColor":"rgba(0, 0, 0, 1)","dateBorderColor":"rgba(25, 169, 123, 1)","dateIconFontColor":"#C0C4CC","uploadBorderStyle":"solid","dateBorderStyle":"solid","dateLableColor":"rgba(25, 169, 123, 1)","dateFontSize":"14px","inputBorderWidth":"1px","uploadIconFontSize":"28px","selectHeight":"40px","inputFontColor":"#606266","uploadHeight":"148px","textareaLableColor":"rgba(25, 169, 123, 1)","textareaLableFontSize":"14px","btnCancelFontSize":"14px","inputBorderStyle":"solid","btnCancelBorderRadius":"4px","inputBgColor":"#fff","inputLableFontSize":"14px","uploadLableColor":"rgba(25, 169, 123, 1)","uploadBorderRadius":"4px","btnSaveHeight":"44px","selectBgColor":"#fff","btnSaveWidth":"88px","selectIconFontSize":"14px","dateHeight":"40px","selectBorderColor":"rgba(25, 169, 123, 1)","inputBorderColor":"rgba(25, 169, 123, 1)","uploadBorderColor":"rgba(25, 169, 123, 1)","textareaFontColor":"rgba(0, 0, 0, 1)","selectBorderWidth":"1px","dateFontColor":"#606266","btnCancelBorderWidth":"1px","uploadBorderWidth":"1px","textareaFontSize":"14px","selectBorderRadius":"4px","selectFontColor":"rgba(25, 169, 123, 1)","btnSaveBorderColor":"rgba(25, 169, 123, 1)","btnSaveBorderWidth":"1px"},
      id: '',
      type: '',
      ro:{
	shetuanbianhao : false,
	shetuanmingcheng : false,
	huanbaoleixing : false,
	xiangmubianhao : false,
	xiangmumingcheng : false,
	tupian : false,
	zhongchoujine : false,
	faqishijian : false,
	jiezhishijian : false,
	xiangmujieshao : false,
	xiangmujinzhan : false,
	sfsh : false,
	shhf : false,
	thumbsupnum : false,
	crazilynum : false,
      },
            ruleForm: {
                	        shetuanbianhao: '',
	                        	        shetuanmingcheng: '',
	                        	        huanbaoleixing: '',
	                                xiangmubianhao: this.getUUID(),
                        	        xiangmumingcheng: '',
	                        	        tupian: '',
	                        	        zhongchoujine: '',
	                        	        faqishijian: '',
	                        	        jiezhishijian: '',
	                        	        xiangmujieshao: '',
	                        	        xiangmujinzhan: '',
	                        	                        	        shhf: '',
	                        	                        	                      },
                                                    huanbaoleixingOptions: [],
                                                                                                                                                                                            rules: {
                  shetuanbianhao: [
                                    	                                                              ],
                  shetuanmingcheng: [
                                    	                                                              ],
                  huanbaoleixing: [
                                    	                                                              ],
                  xiangmubianhao: [
                                    	                                                              ],
                  xiangmumingcheng: [
                                    	                                                              ],
                  tupian: [
                                    	                                                              ],
                  zhongchoujine: [
                                    	                                                              ],
                  faqishijian: [
                                    	                                                              ],
                  jiezhishijian: [
                                    	                                                              ],
                  xiangmujieshao: [
                                    	                                                              ],
                  xiangmujinzhan: [
                                    	                                                              ],
                  sfsh: [
                                    	                                                              ],
                  shhf: [
                                    	                                                              ],
                  thumbsupnum: [
                                        { validator: validateIntNumber, trigger: 'blur' },
                        	                                                              ],
                  crazilynum: [
                                        { validator: validateIntNumber, trigger: 'blur' },
                        	                                                              ],
              }
    };
  },
  props: ["parent"],
  computed: {
                                                                                                                                                                                          },
  created() {
	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
        // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
          	            if(o=='shetuanbianhao'){
            this.ruleForm.shetuanbianhao = obj[o];
	    this.ro.shetuanbianhao = true;
            continue;
          }
	            	            if(o=='shetuanmingcheng'){
            this.ruleForm.shetuanmingcheng = obj[o];
	    this.ro.shetuanmingcheng = true;
            continue;
          }
	            	            if(o=='huanbaoleixing'){
            this.ruleForm.huanbaoleixing = obj[o];
	    this.ro.huanbaoleixing = true;
            continue;
          }
	            	            if(o=='xiangmubianhao'){
            this.ruleForm.xiangmubianhao = obj[o];
	    this.ro.xiangmubianhao = true;
            continue;
          }
	            	            if(o=='xiangmumingcheng'){
            this.ruleForm.xiangmumingcheng = obj[o];
	    this.ro.xiangmumingcheng = true;
            continue;
          }
	            	            if(o=='tupian'){
            this.ruleForm.tupian = obj[o];
	    this.ro.tupian = true;
            continue;
          }
	            	            if(o=='zhongchoujine'){
            this.ruleForm.zhongchoujine = obj[o];
	    this.ro.zhongchoujine = true;
            continue;
          }
	            	            if(o=='faqishijian'){
            this.ruleForm.faqishijian = obj[o];
	    this.ro.faqishijian = true;
            continue;
          }
	            	            if(o=='jiezhishijian'){
            this.ruleForm.jiezhishijian = obj[o];
	    this.ro.jiezhishijian = true;
            continue;
          }
	            	            if(o=='xiangmujieshao'){
            this.ruleForm.xiangmujieshao = obj[o];
	    this.ro.xiangmujieshao = true;
            continue;
          }
	            	            if(o=='xiangmujinzhan'){
            this.ruleForm.xiangmujinzhan = obj[o];
	    this.ro.xiangmujinzhan = true;
            continue;
          }
	            	            	            	            if(o=='thumbsupnum'){
            this.ruleForm.thumbsupnum = obj[o];
	    this.ro.thumbsupnum = true;
            continue;
          }
	            	            if(o=='crazilynum'){
            this.ruleForm.crazilynum = obj[o];
	    this.ro.crazilynum = true;
            continue;
          }
	                    }
                                                                                                                                                                                                                                                              }
            // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
                      		if(json.shetuanbianhao!=''&&json.shetuanbianhao){
              		this.ruleForm.shetuanbianhao = json.shetuanbianhao
		}
                                  		if(json.shetuanmingcheng!=''&&json.shetuanmingcheng){
              		this.ruleForm.shetuanmingcheng = json.shetuanmingcheng
		}
                                                                                                                                                                                                                                                                                                                            } else {
          this.$message.error(data.msg);
        }
      });
                                                                              this.$http({
              url: `option/huanbaofenlei/huanbaoleixing`,
              method: "get"
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.huanbaoleixingOptions = data.data;
              } else {
                this.$message.error(data.msg);
              }
            });
         
                                                                                                                                                                                                                                                    },
                                                                                                                                // 多级联动参数
                                                                                                                                                                  info(id) {
      this.$http({
        url: `huanbaozhongchou/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.ruleForm = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });
    },
        // 提交
    onSubmit() {
                  // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                                                                                                                                                                                                                                                                                                                  this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: `huanbaozhongchou/${!this.ruleForm.id ? "save" : "update"}`,
            method: "post",
            data: this.ruleForm
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.parent.showFlag = true;
                  this.parent.addOrUpdateFlag = false;
                  this.parent.huanbaozhongchouCrossAddOrUpdateFlag = false;
                  this.parent.search();
                  this.parent.contentStyleChange();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.huanbaozhongchouCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
                                                                                    tupianUploadChange(fileUrls) {
                this.ruleForm.tupian = fileUrls;
				this.addEditUploadStyleChange()
            },
                                                                                                                        	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}
</style>
