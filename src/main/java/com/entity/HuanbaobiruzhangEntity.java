package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 环保币入账
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2025-02-26 18:15:08
 */
@TableName("huanbaobiruzhang")
public class HuanbaobiruzhangEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public HuanbaobiruzhangEntity() {
		
	}
	
	public HuanbaobiruzhangEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 用户账号
	 */
					
	private String yonghuzhanghao;
	
	/**
	 * 用户名称
	 */
					
	private String yonghumingcheng;
	
	/**
	 * 手机
	 */
					
	private String shouji;
	
	/**
	 * 环保币
	 */
					
	private String huanbaobi;
	
	/**
	 * 入账原因
	 */
					
	private String ruzhangyuanyin;
	
	/**
	 * 日期
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	@DateTimeFormat 		
	private Date riqi;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：用户账号
	 */
	public void setYonghuzhanghao(String yonghuzhanghao) {
		this.yonghuzhanghao = yonghuzhanghao;
	}
	/**
	 * 获取：用户账号
	 */
	public String getYonghuzhanghao() {
		return yonghuzhanghao;
	}
	/**
	 * 设置：用户名称
	 */
	public void setYonghumingcheng(String yonghumingcheng) {
		this.yonghumingcheng = yonghumingcheng;
	}
	/**
	 * 获取：用户名称
	 */
	public String getYonghumingcheng() {
		return yonghumingcheng;
	}
	/**
	 * 设置：手机
	 */
	public void setShouji(String shouji) {
		this.shouji = shouji;
	}
	/**
	 * 获取：手机
	 */
	public String getShouji() {
		return shouji;
	}
	/**
	 * 设置：环保币
	 */
	public void setHuanbaobi(String huanbaobi) {
		this.huanbaobi = huanbaobi;
	}
	/**
	 * 获取：环保币
	 */
	public String getHuanbaobi() {
		return huanbaobi;
	}
	/**
	 * 设置：入账原因
	 */
	public void setRuzhangyuanyin(String ruzhangyuanyin) {
		this.ruzhangyuanyin = ruzhangyuanyin;
	}
	/**
	 * 获取：入账原因
	 */
	public String getRuzhangyuanyin() {
		return ruzhangyuanyin;
	}
	/**
	 * 设置：日期
	 */
	public void setRiqi(Date riqi) {
		this.riqi = riqi;
	}
	/**
	 * 获取：日期
	 */
	public Date getRiqi() {
		return riqi;
	}

}
