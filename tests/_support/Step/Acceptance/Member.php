<?php 
/*
 * This file is part of laravel-bootstrap-adminlte-starter-kit.
 *
 * Copyright (c) 2016 Oleksii Prudkyi
 */

namespace Step\Acceptance;

class Member extends \AcceptanceTester
{

	public static $email = 'test.user@example.com';
	public static $password = 'passw0RD';
	public static $username = 'Test user name';

    public function loginAsUser(\Page\Acceptance\Login $loginPage)
    {
		$loginPage->login(self::$email, self::$password);
    }

}
