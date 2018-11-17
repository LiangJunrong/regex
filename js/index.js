$(function() {

  /**
   * 开始界面
   */
  // 点击开始
  $(".start-game").click(function() {
    $(".game-start").fadeOut("slow", function() {
      $(".prelude").fadeIn("slow");
    });
    
  })


  // ————————————————————————————


  /**
   * 序幕
   */
  $("#prelude-continue").click(function() {
    $(".prelude").fadeOut("slow", function() {
      $(".act-one").fadeIn("slow", function() {
        $(".act-one-text").fadeIn("slow");
      });
    })
  })


  // ————————————————————————————


  /**
   * 第一章：报名
   */

  // 第一幕：报名背景 -> 第一幕：报名表单
  $("#act-one-text-continue").click(function() {
    $(".act-one-text").fadeOut("slow", function() {
      $(".act-one-form").fadeIn("slow");
    })
  })

  // 判断字段是否有效
  var userNameIsValid = false;
  var userPasswordISValid = false;
  var userPersonalProfileIsValid = false;
  var userPhoneIsValid = false;
  var userIdNumberIsValid = false;
  var userMailBoxIsValid = false;

  // 验证姓名
  $("#user-name").blur(function() {
    // 允许 中文，位数：2-*
    var useNamerReg = /^[\u4e00-\u9fa5]{2,9}$/;
    var userName = $("#user-name").val();
    if(useNamerReg.test(userName)) {
      $(".user-name").removeClass("is-invalid");
      $(".user-name").addClass("is-valid");
      $(".user-name-valid-feedback").hide();
      $(".user-name-valid-feedback").removeClass("invalid-feedback");
      userNameIsValid = true;
    } else {
      $(".user-name").addClass("is-invalid");
      $(".user-name-valid-feedback").show();
      $(".user-name-valid-feedback").addClass("invalid-feedback");
    }
  })

  // 验证密码
  $("#user-password").blur(function() {
    // 允许 a-z、A-Z、0-9、_、-，位数：6-18
    var userPasswordReg = /^[a-zA-Z0-9_-]{6,18}$/;
    var userPassword = $("#user-password").val();
    if(userPasswordReg.test(userPassword)) {
      $(".user-password").removeClass("is-invalid");
      $(".user-password").addClass("is-valid");
      $(".user-password-valid-feedback").hide();
      $(".user-password-valid-feedback").removeClass("invalid-feedback");
      userPasswordISValid = true;
    } else {
      $(".user-password").addClass("is-invalid");
      $(".user-password-valid-feedback").show();
      $(".user-password-valid-feedback").addClass("invalid-feedback");
    }
  })

  // 验证战斗宣言
  $("#user-personal-profile").blur(function() {
    // 允许 中文、a-z、A-Z、英文逗号(,)、中文逗号(，)、空格，位数：6-18
    var userPersonalProfileReg = /^[\u4e00-\u9fa5a-zA-Z,，\s*]{3,18}$/;
    var userPersonalProfile = $("#user-personal-profile").val();
    if(userPersonalProfileReg.test(userPersonalProfile)) {
      $(".user-personal-profile").removeClass("is-invalid");
      $(".user-personal-profile").addClass("is-valid");
      $(".user-personal-profile-valid-feedback").hide();
      $(".user-personal-profile-valid-feedback").removeClass("invalid-feedback");
      userPersonalProfileIsValid = true;
    } else {
      $(".user-personal-profile").addClass("is-invalid");
      $(".user-personal-profile-valid-feedback").show();
      $(".user-personal-profile-valid-feedback").addClass("invalid-feedback");
    }
  })

  // 验证电话号码
  $("#user-phone").blur(function() {
    // 允许 13/4/5/6/7/8/9********* 的 11 位数字
    var userPhoneReg = /^(1[3|4|5|6|7|8|9])\d{9}$/;
    var userPhone = $("#user-phone").val();
    if(userPhoneReg.test(userPhone)) {
      $(".user-phone").removeClass("is-invalid");
      $(".user-phone").addClass("is-valid");
      $(".user-phone-valid-feedback").hide();
      $(".user-phone-valid-feedback").removeClass("invalid-feedback");
      userPhoneIsValid = true;

      // 判断是哪家手机号
      var isChinaMobile = /^134[0-8]\d{7}$|^(?:13[5-9]|147|15[0-27-9]|178|1703|1705|1706|18[2-478])\d{7,8}$/; // 移动
      var isChinaTelcom = /^(?:133|153|1700|1701|1702|177|173|18[019])\d{7,8}$/; // 电信
      var isChinaUniom = /^(?:13[0-2]|145|15[56]|176|1704|1707|1708|1709|171|18[56])\d{7,8}|$/; // 联通
      if(isChinaMobile.test(userPhone)) {
        $(".user-phone-valid-feedback").show();
        $(".user-phone-valid-feedback").addClass("valid-feedback");
        $(".user-phone-valid-feedback").text("欢迎你，移动用户~");
      } else if(isChinaTelcom.test(userPhone)) {
        $(".user-phone-valid-feedback").show();
        $(".user-phone-valid-feedback").addClass("valid-feedback");
        $(".user-phone-valid-feedback").text("欢迎你，电信用户~");
      } else if(isChinaUniom.test(userPhone)) {
        $(".user-phone-valid-feedback").show();
        $(".user-phone-valid-feedback").addClass("valid-feedback");
        $(".user-phone-valid-feedback").text("欢迎你，联通用户~");
      } else {
        $(".user-phone-valid-feedback").show();
        $(".user-phone-valid-feedback").addClass("valid-feedback");
        $(".user-phone-valid-feedback").text("账号太牛，无法识别~");
      }
    } else {
      $(".user-phone").addClass("is-invalid");
      $(".user-phone-valid-feedback").show();
      $(".user-phone-valid-feedback").addClass("invalid-feedback");
      $(".user-phone-valid-feedback").text("请正确输入手机号码~");
    }
  })

  // 验证身份证号
  $("#user-id-number").blur(function() {
    // 允许 15 或者 18 位数字，最后一位数可以是数字及X或者x
    var userIdNumberReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    var userIdNumber = $("#user-id-number").val();
    if(userIdNumberReg.test(userIdNumber)) {
      $(".user-id-number").removeClass("is-invalid");
      $(".user-id-number").addClass("is-valid");
      $(".user-id-number-valid-feedback").hide();
      $(".user-id-number-valid-feedback").removeClass("invalid-feedback");
      userIdNumberIsValid = true;
    } else {
      $(".user-id-number").addClass("is-invalid");
      $(".user-id-number-valid-feedback").show();
      $(".user-id-number-valid-feedback").addClass("invalid-feedback");
    }
  })

  // 验证电子邮箱
  $("#user-mailbox").blur(function() {
    // 允许有一个字符符合 [A-Za-z0-9_] 之后可以为 [A-Za-z0-9_-+.] @ 允许有一个字符符合 [A-Za-z0-9_] 之后可以为 [A-Za-z0-9_-.] . 允许有一个字符符合 [A-Za-z0-9_] 之后可以有 [A-Za-z0-9_-.] 的邮箱
    var userIdNumberReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var userIdNumber = $("#user-mailbox").val();
    if(userIdNumberReg.test(userIdNumber)) {
      $(".user-mailbox").removeClass("is-invalid");
      $(".user-mailbox").addClass("is-valid");
      $(".user-mailbox-valid-feedback").hide();
      $(".user-mailbox-valid-feedback").removeClass("invalid-feedback");
      userMailBoxIsValid = true;
    } else {
      $(".user-mailbox").addClass("is-invalid");
      $(".user-mailbox-valid-feedback").show();
      $(".user-mailbox-valid-feedback").addClass("invalid-feedback");
    }
  })

  // 回车：姓名 -> 密码
  $("#user-name").keydown(function(e) { 
    if(e.which == 13) {
      $(".user-name").blur();
      $(".user-password").focus();
    }
  })

  // 回车：密码 -> 战斗宣言
  $("#user-password").keydown(function(e) { 
    if(e.which == 13) {
      $(".user-password").blur();
      $(".user-personal-profile").focus();
    }
  })

  // 回车：战斗宣言 -> 电话号码
  $("#user-personal-profile").keydown(function(e) { 
    if(e.which == 13) {
      $(".user-personal-profile").blur();
      $(".user-phone").focus();
    }
  })

  // 回车：电话号码 -> 身份证号
  $("#user-phone").keydown(function(e) { 
    if(e.which == 13) {
      $(".user-phone").blur();
      $(".user-id-number").focus();
    }
  })

  // 回车：身份证号 -> 电子邮箱
  $("#user-id-number").keydown(function(e) { 
    if(e.which == 13) {
      $(".user-id-number").blur();
      $(".user-mailbox").focus();
    }
  })

  // 回车：电子邮箱 -> 确认报名
  $("#user-mailbox").keydown(function(e) { 
    if(e.which == 13) {
      $(".user-mailbox").blur();
      $(".form-submit-button").click();
    }
  })

  // 确认报名
  $("#form-submit-button").click(function() {
    if(!userNameIsValid) {
      $(".user-name").focus();
    } else if(!userPasswordISValid) {
      $(".user-password").focus();
    } else if(!userPersonalProfileIsValid) {
      $(".user-personal-profile").focus();
    } else if(!userPhoneIsValid) {
      $(".user-phone").focus();
    } else if(!userIdNumberIsValid) {
      $(".user-id-number").focus();
    } else if(!userMailBoxIsValid) {
      $(".user-mailbox").focus();
    } else {
      $(".act-one").fadeOut("slow", function() {
        $(".act-two").fadeIn("slow");
      });
    }
  })


  // ————————————————————————————


  /**
   * 第二幕：结局
   */
  $("#act-two-continue").click(function() {
    $(".act-two").fadeOut("slow", function() {
      $(".curtain-call").fadeIn("slow");
    })
  })

})